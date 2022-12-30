import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries,ApexAxisChartSeries, ApexTitleSubtitle, ApexGrid, ApexMarkers } from 'ng-apexcharts';
import {ChartComponent,ApexPlotOptions,ApexYAxis,ApexLegend,ApexStroke,ApexXAxis,ApexFill,ApexTooltip} from "ng-apexcharts";
import { Employer } from '../employer';
import { Salaries } from '../salaries';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  series: ApexAxisChartSeries;
  chart: ApexChart;
  title:ApexTitleSubtitle;
  stroke:ApexStroke;
  fill:ApexFill;
  grid:ApexGrid;
  markers:ApexMarkers;
  datalabels:ApexDataLabels;
  yAxis:ApexYAxis;
  xAxis:ApexXAxis;
  plotOptions:ApexPlotOptions;
  legend: ApexLegend;
  toolbar:ApexChart;
  tooltip:ApexTooltip;

  Months:string[]=["January","February","March","April","May"]

  EMPLOYERS: Employer[] = [
    {
      name: 'Ahmed Mostafa',
      JAN: 250,
      FEB: 270,
      MAR: 300,
      APR: 350,
      MAY: 400,
      
    },
    {
      name: 'Karim Khaled',
      JAN: 150,
      FEB: 170,
      MAR: 200,
      APR: 250,
      MAY: 300,
      
    },
    {
      name: 'Mohamed Soliman',
      JAN: 350,
      FEB: 390,
      MAR: 400,
      APR: 450,
      MAY: 450,
      
    },
    {
      name: 'Mahmoud Samy',
      JAN: 170,
      FEB: 190,
      MAR: 200,
      APR: 200,
      MAY: 250,
      
    },
    {
      name:'Petar Soliman',
      JAN: 350,
      FEB: 350,
      MAR: 400,
      APR: 450,
      MAY: 500,
      
    }
  ];
  Salaries:Salaries[]=[
    {
      name: 'Jan',
      Ahmed: 250,
      Karim: 150,
      Mohamed: 350,
      Mahmoud: 170,
      Peter: 350,
    },
    {
      name: 'Feb',
      Ahmed: 270,
      Karim: 170,
      Mohamed: 390,
      Mahmoud: 190,
      Peter: 350,
    },
    {
      name: 'Mar',
      Ahmed: 300,
      Karim: 200,
      Mohamed: 400,
      Mahmoud: 200,
      Peter: 400,
    },
    {
      name: 'Apr',
      Ahmed: 350,
      Karim: 250,
      Mohamed: 450,
      Mahmoud: 200,
      Peter: 450,
    },
    {
      name: 'May',
      Ahmed: 400,
      Karim: 300,
      Mohamed: 450,
      Mahmoud: 250,
      Peter: 500,
    }
  ]
  chartDetails: ApexChart = {
    type: 'bar',
    height: 600,
    toolbar: {
      show: true
    },
  
};

chartLabels = Array.from(Object.values(this.Months), breed => breed);

chartTitle: ApexTitleSubtitle = {
    text: 'Employers\' Salaries',
    align: 'center'
};


chartDataLabels: ApexDataLabels = {
    enabled: false
};
constructor() {
  
}
  ngOnInit(): void {
this.initizalizeChartOptions();
  }
private initizalizeChartOptions():void{
  this.yAxis={
  title:{
  text:"Salary in $",
  style:{
    fontSize:"15px"
    }
  }
}
this.xAxis={
  title:{
    text:"Month",
    style:{
      fontSize:"15px"
    }
  }
}
  this.series=[{
    name:this.EMPLOYERS[0].name,
    data:Array.from(Object.values(this.Salaries), breed => breed.Ahmed)
    
    
  },
{
  name:this.EMPLOYERS[1].name,
  data:Array.from(Object.values(this.Salaries), breed => breed.Karim)
},
{
  name:this.EMPLOYERS[2].name,
  data:Array.from(Object.values(this.Salaries), breed => breed.Mohamed)
},
{
  name:this.EMPLOYERS[3].name,
  data:Array.from(Object.values(this.Salaries), breed => breed.Mahmoud)
},
{
  name:this.EMPLOYERS[4].name,
  data:Array.from(Object.values(this.Salaries), breed => breed.Peter)
}
]
 
  this.fill={
    colors: ['#fd8a8a', '#ffdb89', '#9ea1d4', '#ad8e70','#a8d1d1'],
    opacity:1,
  

  }

this.plotOptions={bar: {
  horizontal: false,
  columnWidth: "70%",
}}
this.tooltip= {
  theme:"dark",
  
  y: {
    formatter: function(val) {
      return  val + " $ ";
    }
  },
  
}
this.legend={
  show:true,
  position:"top",
  markers: {
    width: 12,
    height: 12,
    radius: 12,
    fillColors: ['#fd8a8a', '#ffdb89', '#9ea1d4', '#ad8e70','#a8d1d1'],
    
},
onItemHover: {
  highlightDataSeries: true
},
}
this.grid={
  padding:{
    top:20
  },
  
}
    

}

}
