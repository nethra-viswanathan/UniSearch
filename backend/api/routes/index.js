import universityRoute from './universityRoute.js';
import majorRoute from './majorRoute.js';
import courseRoute from './courseRoute.js';
import facultyRoute from './facultyRoute.js';
import commentRoute from './commentRoute.js';

export default (app) => {
    app.use('/university', universityRoute);
    app.use('/major', majorRoute);
    app.use('/course', courseRoute);
    app.use('/faculty', facultyRoute);
    app.use('/comment', commentRoute);
}