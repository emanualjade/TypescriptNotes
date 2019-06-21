// Record<K,T>
// Constructs a type with a set of properties K of type T. This utility can be used to map the properties of a type to another type.
// A Record<K, T> is an object type whose property keys are K and whose property values are T

interface PageInfo {
  title: string;
  color?: string;
}

type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
  about: { 
    title: "can be anything",
    color: "blue"
  },
  contact: { 
    title: "can be anything" 
  },
  home: { 
    title: "can be anything" 
  }
};
