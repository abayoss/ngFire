import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    balance: 0
  };
  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router) { }

  clientid = this.route.snapshot.params.id;
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.clientService._getClient(id).subscribe((res: Client) => {
      this.client = res;
    });
  }
  deleteClient() {
    this.clientService._deleteClient(this.clientid)
        .then(() => this.router.navigate(['/']))
        .catch((err) => console.error(err));
  }


}
