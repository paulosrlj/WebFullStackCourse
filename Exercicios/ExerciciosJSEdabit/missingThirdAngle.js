/* Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

An acute angle is less than 90 degrees.
A right angle is exactly 90 degrees.
An obtuse angle is greater than 90 degrees (but less than 180 degrees). */

const missingAngle = (angle1, angle2) => {
    let angle3 = 180 - (angle1 + angle2);
    if(angle3 > 90)
        return 'obtuse';
    else if(angle3 < 90)
        return 'acute';
    else 
        return 'right';
}