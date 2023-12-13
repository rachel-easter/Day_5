//getter and setter in typescript
//It is used to access the property of the class
//get and set are the keywords
class Example {
    private _value: number = 0;
  
    // Getter
    get value(): number {
      console.log('Getting the value');
      return this._value;
    }
  
    // Setter
    set value(newValue: number) {
      console.log('Setting the value');
      if (newValue >= 0) {
        this._value = newValue;
      } else {
        console.log('Value must be non-negative.');
      }
    }
  }
  
  
  const exampleInstance = new Example();
  
  // Using the setter
  exampleInstance.value = 2;
  
  // Using the getter
  const retrievedValue = exampleInstance.value;
  console.log('Retrieved value:', retrievedValue);
  
