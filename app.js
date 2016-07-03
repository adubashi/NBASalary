var app = angular.module('myApp', []);

app.controller('HomeController', function($scope) {
  
  
  $scope.salaryCap = {};
  $scope.salaryCap['2017'] = 94143000;
  $scope.salaryCap['2016'] = 70000000;
  $scope.salaryCap['2015'] = 63065000;
  $scope.salaryCap['2014'] = 58679000;
  $scope.salaryCap['2013'] = 58044000;
  $scope.salaryCap['2012'] = 58044000;
  $scope.salaryCap['2011'] = 58044000;
  $scope.salaryCap['2010'] = 57700000;
  $scope.salaryCap['2009'] = 58680000;
  $scope.salaryCap['2008'] = 55630000;
  $scope.salaryCap['2007'] = 53135000;
  $scope.salaryCap['2006'] = 49500000;
  $scope.salaryCap['2005'] = 43870000;
  $scope.salaryCap['2004'] = 43840000;
  $scope.salaryCap['2003'] = 40271000;
  $scope.salaryCap['2002'] = 42500000;
  $scope.salaryCap['2001'] = 35500000;
  $scope.salaryCap['2000'] = 34000000;
  $scope.salaryCap['1999'] = 30000000;
  $scope.salaryCap['1998'] = 26900000;
  $scope.salaryCap['1997'] = 24363000;
  $scope.salaryCap['1996'] = 23000000;
  $scope.salaryCap['1995'] = 15964000;
  $scope.salaryCap['1994'] = 15175000;
  $scope.salaryCap['1993'] = 14000000;
  $scope.salaryCap['1992'] = 12500000;
  $scope.salaryCap['1991'] = 11871000;
  $scope.salaryCap['1990'] = 9802000;
  $scope.salaryCap['1989'] = 7232000;
  $scope.salaryCap['1988'] = 6164000;
  $scope.salaryCap['1987'] = 4945000;
  $scope.salaryCap['1986'] = 4233000;
  $scope.salaryCap['1985'] = 3600000;
  console.log($scope.salaryCap);
  
  $scope.getNewSalary = function(salary,salaryYear,requestedYear) {
	console.log("Salary" + salary);
    var salaryCap = $scope.salaryCap[salaryYear];
	//console.log("Salary Cap" + salaryCap);
	var requestedSalaryCap = $scope.salaryCap[requestedYear];
	//console.log("Requested Salary Cap" + requestedSalaryCap);
	var percentage = (salary/salaryCap);
	var newSalary = percentage * requestedSalaryCap;
	//console.log("Percentage" + percentage);
	//console.log("New Salary:" + newSalary);
	return percentage * requestedSalaryCap;	
  };
  
  $scope.createCapTable = function() {
		//2nd Chart
		keys = Object.keys($scope.salaryCap).reverse();
		capData = [];
		//Keys
		for(var itr in $scope.salaryCap) {
			capData.push($scope.salaryCap[itr])
		}
		capData = capData.reverse();
		console.log(capData);
		
		var dataForCapChart = {
		labels: keys,
		datasets: [
			{
            label: "Salary Cap",
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: capData
			}
			]
		};
		
		var capChart = document.getElementById('capChart');
		
		var myLineChart = new Chart(capChart, {
			type: 'line',
			data: dataForCapChart,
			options: {
				responsive: false
			}
		});
  }
  
  $scope.getNewSalaryOutput = function(){
		var salaryInput = $('#salaryInput').val();
		var salaryYearInput = $('#yearOfSalaryInput').val();
		console.log(salaryYearInput);
		var salaryYearForComparisonInput = $('#yearOfSalaryForComparisonInput').val();
		
		var newSalary = $scope.getNewSalary(salaryInput,salaryYearInput,salaryYearForComparisonInput);
		//newSalary = newSalary.toPrecision(2);
		newSalary = newSalary.toFixed(0)
		console.log(newSalary);
		$('#adjustedSalaryOutput').text("An NBA player making " + "$" + salaryInput +  " in " + salaryYearInput + " would make approximately " +    "$" + newSalary + 
		" in " + salaryYearForComparisonInput);
		
		//First Chart
		var label = [] 
		label.push(salaryYearInput)
		label.push(salaryYearForComparisonInput)
		
		salaryData = [];
		salaryData.push(salaryInput)
		salaryData.push(newSalary)
		
		var data = {
		labels: label,
		datasets: [
			{
            label: "NBA Salary",
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: salaryData
			}
			]
		};
		
		var comparisonChart = document.getElementById("salaryComparisonChart");
		var myBarChart = new Chart(comparisonChart, {
			type: 'bar',
			data: data,
			options: {
				maintainAspectRatio: true,
				responsive: false,
				fullWidth: false,
				scales: {
					yAxes: [{
						ticks: {
						beginAtZero: true
						}
					}]
				}
			}
		});	
		
		$scope.createCapTable();
		
  }
});
