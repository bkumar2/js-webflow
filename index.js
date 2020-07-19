import FlowStep from './FlowStep.js';
import EndStep from './EndStep.js';
import HttpStep from './HttpStep.js';

var flowStep = new FlowStep(null, {
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

flowStep.execute();