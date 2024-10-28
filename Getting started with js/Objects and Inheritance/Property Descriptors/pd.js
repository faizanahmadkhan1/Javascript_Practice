// Property Descriptors: JS object properties are controlled by a structure called Property descriptors
//Property descriptors:
/* --value: It has value |1
   --writable: It controls if can be written  |true
   --enumerable: It make sure property does not display ordinary|true
   --configurable: which no longer allows other property descriptors to be modified,making these changes permanent|False
   */
  
   function Person (id,name) {
    this.id=id;
    this.name=name;
    Object.defineProperty(this,"id",
        {value:id,writable:false,enumerable:true,configurable:false}
    );

   }

   var khaira = new Person(1,"Shadid");
   console.log(khaira);

   Object.defineProperty(khaira,"id",
    {value:5,writable:true,enumerable:true,configurable:true}
);

   // Now we are going to change one of property and id has become 5
   khaira.id=5;
   console.log(khaira);
   console.log(khaira.id);

  // So if we wamt to protect id then we changed writable to false in above 
  // if we make configurable false it will not allow to change property and give error


