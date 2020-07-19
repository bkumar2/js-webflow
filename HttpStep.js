class HttpStep {
    constructor(context, stepConfiguration) {
        this.context = context;
        this.stepConfiguration = stepConfiguration;
    }
    execute() {
        console.log("Hello World");
        return "E";
    }
}

export default HttpStep;