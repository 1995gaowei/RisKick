import { Component, OnInit, Input } from '@angular/core';

import { ProjectService }    from '../services/project.service'

import { User }                 from '../vo/user'
import { Project }              from '../vo/project';

@Component({
    moduleId: module.id,
    selector: 'project-table',
    templateUrl: '../templates/project-table.component.html'
})

export class ProjectTableComponent implements OnInit {
    
    private projects: Project[];
    newProject: Project;
    addButtonClicked = false;

    constructor(
        private projectService: ProjectService
        ) { }

    ngOnInit(): void {
        this.projects = [{"projectId": "1", "projectName": "a", "creatorName": "gao"},
                        {"projectId": "1", "projectName": "a", "creatorName": "gao"}];
        this.newProject = {"projectId": "", "projectName": "", "creatorName": ""};
    }

    onAddProject(): void {
        console.log('add');
    }

    onClickAdd(): void {
        this.addButtonClicked = !this.addButtonClicked;
    }

}