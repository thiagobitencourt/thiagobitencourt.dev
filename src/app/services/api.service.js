import axios from 'axios';
import { articles, getArticle } from './api.mock';

const instance = axios.create({ baseURL: 'http://localhost:8088/api/' });
const mapData = result => result.data || {};

export default class ApiService {
    static getArticles(...params) {
        return Promise.resolve(articles);
        // return instance.get('/article', { params }).then(mapData);
    }

    static getSingleArticle(id) {
        return Promise.resolve(getArticle(id));
        // return instance.get('/article', { params: { id } }).then(mapData);
    }
}