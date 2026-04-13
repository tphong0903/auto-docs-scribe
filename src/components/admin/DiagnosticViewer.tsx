import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DiagnosticViewer = () => {
  const [selectedCode, setSelectedCode] = useState("");

  const dtcData = {
    P0300: {
      description: "Random/Multiple Cylinder Misfire Detected",
      severity: "High",
      possibleCauses: [
        "Faulty spark plugs",
        "Worn ignition coils",
        "Fuel system issues",
        "Vacuum leaks",
        "Low compression",
      ],
      troubleshootingSteps: [
        { step: "1A-C2", description: "Check spark plugs for wear or fouling" },
        { step: "2B-D1", description: "Inspect ignition coils for damage" },
        { step: "3C-E3", description: "Test fuel pressure and injectors" },
        {
          step: "4D-F2",
          description: "Check for vacuum leaks in intake system",
        },
        { step: "5E-G1", description: "Perform compression test on cylinders" },
      ],
    },
    P0171: {
      description: "System Too Lean (Bank 1)",
      severity: "Medium",
      possibleCauses: [
        "Vacuum leak",
        "Faulty oxygen sensor",
        "Clogged fuel filter",
        "Weak fuel pump",
        "Exhaust leak",
      ],
      troubleshootingSteps: [
        { step: "1F-H2", description: "Inspect for vacuum leaks" },
        { step: "2G-I1", description: "Check oxygen sensor operation" },
        { step: "3H-J3", description: "Replace fuel filter if clogged" },
        { step: "4I-K2", description: "Test fuel pump pressure" },
        { step: "5J-L1", description: "Check exhaust system for leaks" },
      ],
    },
    P0420: {
      description: "Catalyst System Efficiency Below Threshold (Bank 1)",
      severity: "Low",
      possibleCauses: [
        "Faulty catalytic converter",
        "Oxygen sensor failure",
        "Exhaust leaks",
        "Engine misfire",
        "Rich fuel mixture",
      ],
      troubleshootingSteps: [
        { step: "1K-M2", description: "Check catalytic converter condition" },
        { step: "2L-N1", description: "Test oxygen sensors" },
        { step: "3M-O3", description: "Inspect exhaust system" },
        { step: "4N-P2", description: "Diagnose engine misfires" },
        { step: "5O-Q1", description: "Check fuel mixture" },
      ],
    },
  };

  const selectedData = selectedCode
    ? dtcData[selectedCode as keyof typeof dtcData]
    : null;

  return (
    <div className="max-w-4xl mx-auto space-y-6 font-manrope">
      <Card className="bg-slate-50 border-slate-200">
        <CardHeader>
          <CardTitle className="font-sora text-blue-900">
            Diagnostic Trouble Code Lookup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedCode} onValueChange={setSelectedCode}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select or search for DTC code..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="P0300">
                P0300 - Random/Multiple Cylinder Misfire
              </SelectItem>
              <SelectItem value="P0171">
                P0171 - System Too Lean (Bank 1)
              </SelectItem>
              <SelectItem value="P0420">
                P0420 - Catalyst System Efficiency Below Threshold
              </SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {selectedData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="font-sora text-blue-900">
                Error Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-700">Description</h4>
                <p className="text-slate-600">{selectedData.description}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Severity</h4>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    selectedData.severity === "High"
                      ? "bg-red-100 text-red-800"
                      : selectedData.severity === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                  }`}
                >
                  {selectedData.severity}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="font-sora text-blue-900">
                Possible Causes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {selectedData.possibleCauses.map((cause, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-600">{cause}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedData && (
        <Card className="bg-white border-slate-200">
          <CardHeader>
            <CardTitle className="font-sora text-blue-900">
              Troubleshooting Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative border-l-2 border-blue-200 ml-3 mt-2 mb-2">
              {selectedData.troubleshootingSteps.map((step, index) => (
                <div key={index} className="mb-6 last:mb-0 relative pl-8">
                  <div className="absolute -left-[9px] top-4 w-4 h-4 bg-blue-600 rounded-full border-2 border-white ring-4 ring-slate-50"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-100 transition-colors shadow-sm">
                    <div className="flex-1 mb-3 sm:mb-0">
                      <span className="block font-semibold text-blue-700 mb-1">
                        Step {step.step}
                      </span>
                      <span className="text-slate-700">{step.description}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="sm:ml-4 border-blue-600 text-blue-600 hover:bg-blue-50 shrink-0"
                      onClick={() => (window.location.hash = step.step)}
                    >
                      Go to Procedure
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DiagnosticViewer;
