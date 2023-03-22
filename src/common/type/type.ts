export type StatusType = 'loading' | 'received' | 'rejected' | 'idle'

export type APIResponseType =  {
    flags: {
        svg: string
        png: string
    }
    name: string
    population: number
    region: string
    capital: string
}

export type CountriesType =  {
    status: StatusType
    error: string | null
    list: APIResponseType[]
}
type ICurrenciesType = {
    code: string
    name: string
    symbol: string
}

type LanguagesType = {
    [key: string]: string
}
export type DetailsResponseType ={
    name: string
    nativeName: string
    flag:string
    region: string
    capital: string
    population: number
    subregion: string
    topLevelDomain: string[]
    currencies: ICurrenciesType[]
    languages: LanguagesType[]
    borders: string[]
}