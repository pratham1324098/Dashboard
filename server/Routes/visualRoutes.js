const express = require("express")
const {  showIntensity, showRelevance, showLikelihood, showYear, showCountry, showRegion, showCity, showTopics, showAddandPublish, showStartYear, showEndYear, PercentIntensity } = require("../Controller/visualController")
const router = express.Router()

router.get("/intensity",showIntensity)
router.get("/relevance",showRelevance)
router.get("/likelihood",showLikelihood)
router.get("/year",showAddandPublish)
router.get("/country",showCountry)
router.get("/region",showRegion)
router.get("/topics",showTopics)
router.get("/startyear",showStartYear)
router.get("/endyear",showEndYear)
router.get("/percent",PercentIntensity)

module.exports = router;