#Prerequisite
install npm, bower, gulp.

#How to run
Execute the following in order:
1. npm install
2. bower install
3. gulp serve

#Usage
Create json object according to the following format:
```
profile =
[
  {
    id:1,
    driver:{name:'Mr A', contact:'99999999', photo:'http://placehold.it/120x120'},
    vehicle:{plate:'SGX1111A', model:'Mitsubishi', photo:'http://placehold.it/120x120'}
  },
  {
    id:2,
    driver:{name:'Mr B', contact:'88888888', photo:'http://placehold.it/120x120'}
  },
  {
    id:3,
    vehicle:{plate:'SGX2222A', model:'BMW', photo:'http://placehold.it/120x120'}
  },
  {
    id:4,
    driver:{name:'Mr D', contact:'66666666', photo:'http://placehold.it/120x120'},
    vehicle:{plate:'SGX3333A', model:'Toyota', photo:'http://placehold.it/120x120'}
  },
  {
    id:5,
    driver:{name:'Mr E', contact:'55555555', photo:'http://placehold.it/120x120'},
    vehicle:{plate:'SGX4444A', model:'Honda', photo:'http://placehold.it/120x120'}
  }
];
```

Pass it into the directive like this:
```
<custom-dropdown list="vm.profiles" selected="vm.selected"></custom-dropdown>
```

Fetch selected value like this:
```
{{vm.selected}}
```


##Directive source code location
https://github.com/shingchyuan/qi-dropdown/tree/master/src/app/components/directive
