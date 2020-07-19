class Step {
    constructor(context, stepConfiguration) {
        this.context = context;
        this.stepConfiguration = stepConfiguration;
    }
    execute() {
        console.log(this.stepConfiguration);
    }
}

export default Step;