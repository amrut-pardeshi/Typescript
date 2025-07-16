interface Individial {
  name: string;
  birthday: string;
}
interface Organization {
  companyName: string;
  workPhone: string;
}

type ContactType = Individial | Organization

type ComoContractType = Individial & Organization

function addContract(contact: ContactType){
  if("birthday" in contact)
    console.log("Individual")
  else
    console.log("Organization")
}