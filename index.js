import Step from './Step.js';
import HttpStep from './HttpStep.js';

var step = new Step({
    id: "flow1",
    startAt: "step1",
    steps: [{
            id: "step1",
            processor: HttpStep,
            configuration: {},
            events: [{
                onEvent: "E",
                toStep: "d"
            }]
        },
        {
            id: "step2",
            processor: EndStep,
            configuration: {},
            events: [{
                onEvent: "F",
                toStep: "d"
            }]
        }
    ]
});

step.execute();