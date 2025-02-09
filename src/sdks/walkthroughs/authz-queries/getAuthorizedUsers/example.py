from permit import AuthorizedUsersResult

authorized_users: AuthorizedUsersResult = permit.authorized_users(
    "read", "repo",
)