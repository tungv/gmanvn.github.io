var tungv = {
  skills : [
  {
    "name": "JavaScript",
    "since": 2007,
    "level": 5,
    "category": "js"
  },
  {
    "name": "jQuery",
    "since": 2008,
    "level": 5,
    "category": "js"
  },
  {
    "name": "Angular.JS",
    "since": 2012,
    "level": 4,
    "category": "js"
  },
  {
    "name": "Knockout.JS",
    "since": 2012,
    "level": 4,
    "category": "js"
  },
  {
    "name": "Node.JS",
    "since": 2012,
    "level": 5,
    "category": "server-js"
  },
  {
    "name": "Express.JS",
    "since": 2012,
    "level": 4,
    "category": "server-js"
  },
  {
    "name": "Socket.IO",
    "since": 2012,
    "level": 3,
    "category": "server-js"
  },
  {
    "name": "HTML5",
    "since": 20011,
    "level": 4,
    "category": "web"
  },
  {
    "name": "CSS",
    "since": 2008,
    "level": 4,
    "category": "web"
  },
  {
    "name": "Less",
    "since": 2012,
    "level": 4,
    "category": "web"
  },
  {
    "name": "MySQL",
    "since": 2010,
    "level": 4,
    "category": "storage"
  },
  {
    "name": "SQL Server",
    "since": 2008,
    "level": 3,
    "category": "storage"
  },
  {
    "name": "MongoDB",
    "since": 2012,
    "level": 4,
    "category": "storage"
  },
  {
    "name": "Redis",
    "since": 2012,
    "level": 4,
    "category": "storage"
  },
  {
    "name": ".Net",
    "since": 2008,
    "level": 4,
    "category": "general"
  },
  {
    "name": "Java",
    "since": 2008,
    "level": 3,
    "category": "general"
  }
],
  projects: [
    {
      "name": "eClick",
      "employer": "FPT Online",
      "from" : "May 2011",
      "to" : "present",
      "description" : "eClick &ndash; Advertising network",
      "link" : "http://eclick.vn",
      "roles" : ["Backend","Frontend","Business Analyst"],
      "tech": ["NodeJS","ExpressJS","KnockoutJS", "AngularJS", "Vanilla JavaScript","Redis", "MySQL"]
    },{
      "name": "scorecard",
      "employer": "Agency Revolution",
      "from" : "April 2012",
      "to" : "June 2012",
      "description" : "Scorecard.io &ndash; Medical Insurance Websites analyzer",
      "link" : "http://scorecard.io",
      "roles" : ["Frontend"],
      "tech": ["AngularJS"]
    },{
      "name": "iMath",
      "employer": "RealCom Ltd",
      "from" : "August 2011",
      "to" : "October 2011",
      "description" : "iMath &ndash; Mathematical and 2D Geometrical applications",
      "link" : "",
      "roles" : ["Project Leader","Lead Dev"],
      "tech": ["WPF", "XML", ".Net Framework 3.5"]
    }/*,{
      "name": "FPT University Training and Finance System",
      "employer": "FPT University",
      "from" : "May 2011",
      "to" : "June 2011",
      "description" : "FPT University Training and Finance System",
      "link" : "",
      "roles" : ["Database Designer","Business Analyst"],
      "tech": [".Net Framework 3.5", "SQL Server 2005"]
    }*/,{
      "name": "vivuvivu",
      "employer": "FPT Software",
      "from" : "October 2010",
      "to" : "April 2011",
      "description" : "vivuvivu &ndash; Entertainment and Security related services",
      "link" : "http://fds.vivuvivu.com",
      "roles" : ["Backend","Frontend","Business Analyst","Database Design"],
      "tech": [".Net Framework 3.5", "SQL Server 2005"]
    }
  ],

  schools : [{
    "name" : "FPT University",
    "from" : "September 2008",
    "to" : "July 2012",
    "degree":"Bachelor of Software Engineering",
    "highlights" : ["All technical and business courses are in English", "90% tuition scholarship","Graduated Second of the Batch 4A"]
  },{
    "name" : "FPT Aptech",
    "from" : "May 2007",
    "to" : "May 2008",
    "degree":"Information Systems Management",
    "highlights" : ["Graduated: 8.7/10"]
  },{
    "name" : "Le Hong Phong",
    "from" : "August 2005",
    "to" : "May 2008",
    "degree":"High School",
    "highlights" : ["High School for the Gifted", "Good at Math and Physics"]
  }]
};



var app = angular.module('tungv', [])
  .controller('mainCtrl', ['$scope', function ($scope) {
    $scope.skills = _.groupBy(tungv.skills, function (skill) {
      return skill.category;
    });

    $scope.skills = _.sortBy($scope.skills, function (category, name) {
      switch (name) {
        case 'js': return 1;
        case 'server-js': return 2;
        case 'web': return 3;
        case 'storage': return 4;
        case 'general': return 5;
        default: return 100;
      }
    });

    $scope.projects = tungv.projects;
    $scope.schools = tungv.schools;
  }]);
