import axios from 'axios';
import { articles, getArticle } from './api.mock';

const instance = axios.create({ baseURL: 'http://localhost:3000/api/' });

export default class ApiService {
    static getArticles(...params) {
        return new Promise(resolve => (
            resolve(articles)
            // instance.get('/articles', { params })
            //     .then(result => resolve(result.data || []))
            //     .catch(_ => resolve([]))
        ));
    }

    static getSingleArticle(key) {
        return new Promise(resolve => (
            resolve(getArticle(key))
            // instance.get(`/articles/${key}`)
            //     .then(result => resolve(result.data || {}))
            //     .catch(_ => resolve({}))
        ))
    }
}