import { Component } from '@angular/core';
import { RedirectorService } from 'src/app/services/redirector/redirector.service';
import { LinkStatus } from 'src/app/models/link.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-redireccion',
    templateUrl: './redirection.component.html',
    styleUrls: ['./redirection.component.css']
})
export class RedirectionComponent {

    public error: any;
    public orderLink: string;
    public status: number;
    public errorInPage: any;

    constructor(
        private router: Router,
        private redirectorService: RedirectorService,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(params => {
            const ldpId = params.link;
            if (ldpId) {
                this.getLinkBackend(ldpId);
            }
        });
    }

    getLinkBackend(linkId: string) {
        this.redirectorService.getLink(linkId).subscribe(data => {
                if (data !== null) {
                    this.orderLink = data.order_link;
                    this.status = data.link_status;
                    this.validateRedirection();
                } else {
                    this.router.navigate(['/error']);
                }
            }, _ => {
                this.router.navigate(['/error']);
            }
        );
    }

    validateRedirection() {
        if (this.orderLink === null && this.status === LinkStatus.Expired) {
            this.errorInPage = 'Orden Expirada';
            this.router.navigate(['/expiredLink']);
        } else if (this.orderLink !== null && this.status === LinkStatus.Pending) {
            window.location.replace(this.orderLink);
        } else if (this.orderLink !== null && this.status === LinkStatus.Completed) {
            window.location.replace(this.orderLink);
        } else if ((this.orderLink !== null || this.orderLink === '') && this.status === LinkStatus.Canceled) {
            this.errorInPage = 'Orden Cancelada';
            this.router.navigate(['/error']);
        } else {
            this.errorInPage = 'Error desconocido';
            this.router.navigate(['/error']);
        }
    }
}
