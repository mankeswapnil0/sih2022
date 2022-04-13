const express = require("express");
const { getLinkedInScrapper, getLeetcodeContest, getCodechefContest,getMLHScrapper, getIeeeScrapper} = require("../controller/scrapperController");
const router = express.Router();


router.route("/linkedIn").get(getLinkedInScrapper);
router.route("/leetcode").get(getLeetcodeContest);
router.route("/codechef").get(getCodechefContest);
router.route("/mlh").get(getMLHScrapper);
router.route("/ieee").get(getIeeeScrapper);

module.exports = router