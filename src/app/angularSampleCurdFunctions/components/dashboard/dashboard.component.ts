import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../shared/services/loading.service';
import { UserService } from '../../services/user.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 articles: any[];
  constructor(private userService: UserService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getArticles();
  }


  getArticles() {
    this.loadingService.toggleLoadingIndicator(true);
    this.userService.getArticles().subscribe(
      data => {
        this.articles = data ? data.articles : null;
        console.log(data);
        this.loadingService.toggleLoadingIndicator(false);
      },
      err => {
        this.loadingService.toggleLoadingIndicator(false);
      }
    );
  }
  trackByFn(index, item) {
    return index;
  }
}
