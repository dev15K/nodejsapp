const home = (req, res) => {
    res.render("index", { title: "Trang chủ" });
};

const showMessage = (req, res) => {
    res.render("message", { title: "Trang chủ" });
};


const sendMessage = (req, res) => {
    const { message } = req.body;
    req.flash("success_msg", "Gửi tin nhắn thành công!");
    res.redirect("/");
};

module.exports = { home, sendMessage, showMessage };
