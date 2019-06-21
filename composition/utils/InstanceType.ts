// InstanceType<T> 
// Constructs a type consisting of the instance type of a constructor function type T.

class Chart {
  x = 0;
  y = 0;
}

type D0 = InstanceType<typeof Chart>;  // C
type D1 = InstanceType<any>;  // any
type D2 = InstanceType<never>;  // any
type D3 = InstanceType<string>;  // Error
type D4 = InstanceType<Function>;  // Error

const theChartInstance: D0 = new Chart()
