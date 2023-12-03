export interface IDictionaries {
    about?: string[];
    experience?: string[];
    hero?: string[];
    labels?: string[];
    presentation?: string[];
    skills?: string;
}

export interface IGetDictionaries {
    [key: string]: () => Promise<IDictionaries>;
}
