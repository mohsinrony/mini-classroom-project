// Define the type for the grades parameter
type Grade = number;

export function getNumberOfGrades(grades: Grade[]): number {
    return grades.length;
}

export function getSumGrades(grades: Grade[]): number {
    return grades.reduce((sum, grade) => sum + grade, 0);
}

export function getAverageValue(grades: Grade[]): number {
    const sum = getSumGrades(grades);
    const count = getNumberOfGrades(grades);
    return count > 0 ? sum / count : 0;
}

export function getPassingGrades(grades: Grade[]): Grade[] {
    return grades.filter(grade => grade >= 10);
}

export function getFailingGrades(grades: Grade[]): Grade[] {
    return grades.filter(grade => grade <= 9);
}

export function getRaisedGrades(grades: Grade[]): Grade[] {
    return grades.map(grade => (grade + 1 <= 20 ? grade + 1 : grade));
}
