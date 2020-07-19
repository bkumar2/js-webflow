class EndStep {
    constructor(context, stepConfiguration) {
        this.context = context;
        this.stepConfiguration = stepConfiguration;
    }
    execute() {
        console.log("End Step");
        return "T";
    }
}

export default EndStep;