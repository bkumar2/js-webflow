class FlowStep {
    constructor(context, stepConfiguration) {
        this.context = context;
        this.stepConfiguration = stepConfiguration;
    }
    execute() {
        var firstStep = this.stepConfiguration.startAt;
        for (var i = 0; i < this.stepConfiguration.steps.length; ++i) {
            var step = this.stepConfiguration.steps[i];
            if (firstStep === step.id) {
                var processor = new step.processor(this.context, step.configuration);
                processor.execute();
                break;
            }
        }
    }
}

export default FlowStep;