export interface Environment {

    id: string , 
    status: number , 
    title: string , 
    name: string 

}


export type EnvStatusChange = {

    statusId: number,
    description: string,
    environments: Environment []

}

