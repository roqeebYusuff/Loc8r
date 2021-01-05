const about = (req, res) => {
    res.render('generic-text', {
        title: 'About',
        paragraph: '<br /><br />'
    });
}

module.exports = {about}