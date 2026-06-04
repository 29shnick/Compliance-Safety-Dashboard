'use client';

import { useState } from 'react';
import { ShieldAlert, CheckCircle, Activity, Loader2 } from 'lucide-react';

export default function Dashboard() {
  const [analysis, setAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const sampleData = "Q3 Incident Report: 3 minor forklift collisions in Warehouse B. 12 missed safety training modules. Fire extinguishers in Sector 4 are 2 weeks past inspection date.";

  const runAnalysis = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reportData: sampleData }),
      });

      if (!response.ok) throw new Error('Analysis failed');

      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (err) {
      setError('Failed to connect to the analysis engine.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex justify-between items-center border-b pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Compliance & Safety</h1>
            <p className="text-slate-500 mt-1">Automated Risk Analysis Dashboard</p>
          </div>
          <button 
            onClick={runAnalysis}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : <Activity className="w-4 h-4" />}
            {isLoading ? 'Running Scan...' : 'Run Audit'}
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full text-green-600"><CheckCircle /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Compliance Score</p>
              <p className="text-2xl font-bold text-slate-800">84%</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><ShieldAlert /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Open Flags</p>
              <p className="text-2xl font-bold text-slate-800">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-8 min-h-[300px]">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">AI Audit Report</h2>
          {error && <div className="bg-red-50 text-red-700 p-4 rounded-md border border-red-200">{error}</div>}
          {!analysis && !isLoading && !error && (
            <div className="text-center text-slate-400 py-12">
              <Activity className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p>Click "Run Audit" to generate the latest compliance insights.</p>
            </div>
          )}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin mb-4 text-blue-600" />
              <p>Analyzing cross-departmental safety logs...</p>
            </div>
          )}
          {analysis && (
            <div className="prose prose-slate max-w-none prose-h2:text-lg prose-h2:font-semibold">
              <div dangerouslySetInnerHTML={{ __html: analysis.replace(/\n/g, '<br/>') }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
