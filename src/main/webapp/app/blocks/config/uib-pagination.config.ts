import { Injectable } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { ITEMS_PER_PAGE } from '../../shared/constants/pagination.constants';

@Injectable()
export class PaginationConfig {
    // tslint:disable-next-line: no-unused-variable
    constructor(private config: NgbPaginationConfig) {
        config.boundaryLinks = true;
        config.maxSize = 5;
        config.pageSize = ITEMS_PER_PAGE;
        config.size = 'sm';
    }
}
