import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { UsersService, User } from '@e-shop-frontend/users';

@Component({
    standalone: true,
    imports: [CardModule, ToolbarModule, ButtonModule, TableModule, ToastModule, ConfirmDialogModule, RouterLink],
    templateUrl: './user-list.component.html',
    styles: ``
})
export class UserListComponent {
    users: User[] = [];

    constructor(private usersService: UsersService) {}

    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit(): void {
        this.getUsers();
    }

    updateUser(userId: string): void {
        console.log();
    }

    deleteUser(userId: string): void {
        console.log();
    }

    private getUsers() {
        this.usersService.getUsers().subscribe((us) => {
            this.users = us;
        });
    }
}
