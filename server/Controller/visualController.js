const data = require("../model/dataModel")
const mongoose = require("mongoose");

const showIntensity = async (req, res) => {
    try {
        const jsonData = await data.find()
        const intensityValues = jsonData.map(item => item.intensity);

        // Send the array of intensity values as a response
        res.json(intensityValues);
    } catch (error) {
        console.error("Error fetching intensity data:", error);
        res.status(500).send("Internal Server Error");
    }
};

const PercentIntensity = async (req, res) => {
    try {
        const jsonData = await data.find();
        const intensityValues = jsonData.map(item => item.intensity);
        let lowCount = 0, mid1 = 0, mid2 = 0, high = 0;

        intensityValues.forEach(x => {
            if (x < 5) {
                lowCount++;
            } else if (x >= 5 && x < 10) {
                mid1++;
            } else if (x >= 10 && x < 20) {
                mid2++;
            } else {
                high++;
            }
        });

        return res.status(200).send({
            
            LowPercent: (lowCount * 100) / 2000,
            mid1Percent: (mid1 * 100) / 2000,
            mid2Percent: (mid2 * 100) / 2000,
            highPercent: (high * 100) / 2000
        });
    } catch (error) {
        return res.status(500).send({ message: "Error in Percent Intensity" });
    }
};


const showLikelihood = async(req,res) => {
    try {
        const jsonData = await data.find()
        const LikelihoodValues = jsonData.map(item => item.likelihood);

        // Send the array of Likelihood values as a response
        res.json(LikelihoodValues);
    } catch (error) {
        console.error("Error fetching Likelihood data:", error);
        res.status(500).send("Internal Server Error");
    }
}
const showRelevance = async(req,res) =>{
    try {
        const jsonData = await data.find()
        const RelevanceValues = jsonData.map(item => item.relevance);

        // Send the array of Likelihood values as a response
        res.json(RelevanceValues);
    } catch (error) {
        console.error("Error fetching relevance data:", error);
        res.status(500).send("Internal Server Error");
    }
}
const showAddandPublish = async(req,res) =>{
    try {
        const jsonData = await data.find()
        const YearValues = jsonData.map(item => {
            const addedYear = item.added.split(" ")[2];
            const publishedYear = item.published.split(" ")[2];
            return { addedYear, publishedYear };
        });
        res.json(YearValues);
    } catch (error) {
        console.error("Error fetching year data:", error);
        res.status(500).send("Internal Server Error");
    }
}
const showCountry = async(req,res) =>{
    try {
        const jsonData = await data.find()
        const CountryValues = jsonData.map(item => item.country);

        // Send the array of Likelihood values as a response
        res.json(CountryValues);
    } catch (error) {
        console.error("Error fetching country data:", error);
        res.status(500).send("Internal Server Error");
    }
}
const showTopics = async(req,res) =>{
    try {
        const jsonData = await data.find()
        const TopicsValues = jsonData.map(item => item.topic);

        // Send the array of Likelihood values as a response
        res.json(TopicsValues);
    } catch (error) {
        console.error("Error fetching topic data:", error);
        res.status(500).send("Internal Server Error");
    }
}
const showRegion = async(req,res) =>{
    try {
        const jsonData = await data.find()
        const RegionValues = jsonData.map(item => item.region);

        // Send the array of Likelihood values as a response
        res.json(RegionValues);
    } catch (error) {
        console.error("Error fetching region data:", error);
        res.status(500).send("Internal Server Error");
    }
}
const showStartYear = async(req,res) =>{
    try {
        const jsonData = await data.find()
        const Startyearvalues = jsonData.map(item => item.start_year);

        // Send the array of Likelihood values as a response
        res.json(Startyearvalues);
    } catch (error) {
        console.error("Error fetching start_year data:", error);
        res.status(500).send("Internal Server Error");
    }
}
const showEndYear = async(req,res) =>{
    try {
        const jsonData = await data.find()
        const EndYearValues = jsonData.map(item => item.end_year);

        // Send the array of Likelihood values as a response
        res.json(EndYearValues);
    } catch (error) {
        console.error("Error fetching end_year data:", error);
        res.status(500).send("Internal Server Error");
    }
}


module.exports={showIntensity,PercentIntensity,showStartYear,showEndYear,showCountry,showLikelihood,showRelevance,showAddandPublish,showRegion,showTopics}