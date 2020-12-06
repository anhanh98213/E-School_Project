import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js'
import { ESchoolService } from 'src/app/eSchool.service';
import { CountGuardian, CountLecturer, CountManager, CountStudent } from 'src/app/models/user';



@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private router: Router, private eSchoolService: ESchoolService) { }

  countStudent = CountStudent["data"]
  countManager = CountManager["data"]
  countLecturer = CountLecturer["data"]
  countGuardian = CountGuardian["data"]


  ngOnInit(): void {
    this.getcount()
  }

  async getcount(){
    this.countStudent =  await this.eSchoolService.getNumberOfStudent().toPromise()
    this.countManager =  await this.eSchoolService.getNumberOfManager().toPromise()
    this.countLecturer = await this.eSchoolService.getNumberOfLecturer().toPromise()
    this.countGuardian = await this.eSchoolService.getNumberOfGuardian().toPromise()
    this.chart();
    this.chart2();
  }

  chart() {
    var ctx = document.getElementById('myChart1');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Manager', 'Lecturer', 'Student', 'Guardian'],
        datasets: [{
          label: '# total',
          data: [this.countManager.total, this.countLecturer.total, this.countStudent.total, this.countGuardian.total],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


  chart2() {
    var ctx = document.getElementById('myChart2');
    var myChart1 = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Male', 'Female', 'Other'],
        datasets: [{
          data: [this.countStudent.male, this.countStudent.female, this.countStudent.otherGender],
          backgroundColor: [
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 206, 86, 0.5)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
      }
    });
  }

}
