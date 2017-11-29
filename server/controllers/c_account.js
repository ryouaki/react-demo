
class AccountController {
  test(req, res, next) {
    res.json({msg: 'ok'});
  }
}

exports = module.exports = new AccountController();