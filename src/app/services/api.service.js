import axios from 'axios';
// import { articles, getArticle } from './api.mock';

const instance = axios.create({ baseURL: 'http://localhost:8088/api/' });

export default class ApiService {
    static getArticles(...params) {
        return new Promise(resolve => (
            instance.get('/article', { params })
                .then(result => resolve(result.data || []))
                .catch(_ => resolve([]))
        ));
    }

    static getSingleArticle(id) {
        return new Promise(resolve => (
            instance.get('/article', { params: { id } })
                .then(result => resolve(result.data || {}))
                .catch(_ => resolve({}))
        ))
    }
}