const express = require('express');
const newClass = require('../../Controllers/classControllers/new-Class');
const getClasses = require('../../Controllers/classControllers/getClasses');
const instructorClasses = require('../../Controllers/classControllers/instructorClasses');
const manageClasses = require('../../Controllers/classControllers/manageClasses');
const classStatusChnage = require('../../Controllers/classControllers/classStatusChnage');
const approvedClasses = require('../../Controllers/classControllers/approvedClasses');
const updateClass = require('../../Controllers/classControllers/updateClass');
const singleClassDetails = require('../../Controllers/classControllers/singleClassDetails');
const router = express.Router();

router.post('/newClass', newClass);

router.get('/getClasses', getClasses);

router.get('/getClasses/:email', instructorClasses);

router.get('/manage-classws', manageClasses);

router.put('/change-status/:id', classStatusChnage);

router.get('/approved-classes', approvedClasses);

router.get('/singleClassDetails/:id', singleClassDetails);

router.put('/updateClass/:id', updateClass);


module.exports = router;