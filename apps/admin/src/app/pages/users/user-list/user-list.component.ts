import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { UsersService, User } from '@e-shop-frontend/users';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TagModule } from 'primeng/tag';

@Component({
    standalone: true,
    imports: [CardModule, ToolbarModule, ButtonModule, TableModule, ToastModule, ConfirmDialogModule, RouterLink, TagModule, CommonModule],
    templateUrl: './user-list.component.html',
    styles: ``
})
export class UserListComponent {
    users: User[] = [];

    constructor(
        private usersService: UsersService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router
    ) {}

    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit(): void {
        this.getUsers();
    }

    updateUser(userId: string): void {
        this.router.navigateByUrl(`/users/update/${userId}`);
    }

    deleteUser(userId: string): void {
        this.confirmationService.confirm({
            // target: e.target as EventTarget,
            message: 'Are you sure that you want to delete this user?',
            header: 'Delete User',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'none',
            rejectIcon: 'none',
            rejectButtonStyleClass: 'p-button-text',
            accept: () => {
                this.usersService.deleteUser(userId).subscribe({
                    next: (response) => {
                        this.getUsers();
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User deleted successfully!' });
                        console.log(response);
                    },
                    error: (error) => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete user!' });
                        console.log(error);
                    }
                });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    private getUsers() {
        this.usersService.getUsers().subscribe((us) => {
            this.users = us;
        });
    }
}
