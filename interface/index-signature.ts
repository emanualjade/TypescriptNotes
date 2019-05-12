interface phoneNumberDict {
  [someKey: string]: undefined | {
    areaCode: number
    phone: number
  }
}

// extend the interface above by using the same name for the interface
// must have propery 'home' and can also add others to your object if you want
// This is technically declaration merging
interface phoneNumberDict {
  home: {
    areaCode: number
    phone: number
  }
}

const d: phoneNumberDict = {
  home: {
    areaCode: 506,
    phone: 89824500
  },
  // can add this custom one due to index signature interface above
  mobile: {
    areaCode: 506,
    phone: 89824500
  }
}

if(d.home) {
  d.home.areaCode
}

if(d.work){
  console.log(d.work.phone)
}

