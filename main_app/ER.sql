
Table users as U {
    id int [pk, increment]
    name varchar
    email varchar
    password varchar
    role tinyint
}
Table admins as A {
    id int [pk, increment]
    name varchar
    email varchar
    password varchar
}

Ref: projects.user_id > users.id
Table projects {
    id int [pk, increment]
    user_id int [ref: > users.id]
    name varchar
}

Ref: project_process.project_id > project.id
Table project_procies {
    id int [pk, increment]
    project_id int [ref: > projects.id]
    name varchar
}

Ref: project_prociess_logs.project_procies_id > project_procies.id
Table project_prociess_logs {
    id int [pk, increment]
    project_prociess_id int [ref: > project_prociess_id]
}

Table labels {
    id int [pk, increment]
    label varchar
}

Table project_label {
    label_id int [ref: > labels.id]
    project_id int [ref: > project.id]
}

Table project_process_label {
    label_id int [ref: > labels.id]
    project_process_id int [ref: > project.id]
}
