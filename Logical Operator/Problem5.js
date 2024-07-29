/* Problem 5
Temperature Range: determine if a given temperature is within a
comfortable range for outdoor activities. If the temperature is between 65°F
and 85°F (temperature >= 65 && temperature <= 85), it's considered
comfortable. If it's outside this range, it's either too hot or too cold for
outdoor activities. */

let temperature=75           //change the value and check the result.
if (temperature>=65 && temperature<=85) {
    console.log("Comfortable for outdoor activities");
} else {
    console.log("Not comfortable, it's either too hot or too cold for outdoor activities");
}
