export interface IDictionaries {
    about?: string[];
    content?: string[];
    experience?: string[];
    hero?: string[];
    labels?: string[];
    meta?: [];
    onGithub?: string;
    presentation?: string[];
    skills?: string;
}

export interface IGetDictionaries {
    [key: string]: () => Promise<IDictionaries>;
}
