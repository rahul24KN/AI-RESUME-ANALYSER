import { Briefcase, MapPin, DollarSign, Bookmark, ExternalLink } from "lucide-react";
import SkillBadge from "./SkillBadge";

export default function JobCard({ job, onSave, onApply }) {
  const { title, company, location, salary, experience, matchScore, domain, skills, isSaved } = job;

  return (
    <div className="relative overflow-hidden border rounded-xl bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary-500/40 hover:-translate-y-1">
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div>
          <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-primary-600 dark:text-primary-400 bg-primary-500/10 rounded-md uppercase">
            {domain}
          </span>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-2 hover:text-primary-500 transition-colors">
            {title}
          </h3>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            {company}
          </p>
        </div>
        
        {/* Match score bubble */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-primary-500 to-cyber-cyan p-0.5 shadow-sm">
            <div className="flex items-center justify-center w-full h-full rounded-full bg-white dark:bg-slate-950">
              <span className="text-sm font-extrabold bg-gradient-to-r from-primary-500 to-cyber-cyan bg-clip-text text-transparent">
                {matchScore}%
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">
            Match
          </span>
        </div>
      </div>

      {/* Metadata Indicators */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-4 text-xs font-medium text-slate-500 dark:text-slate-400 border-y border-slate-100 dark:border-slate-850 py-3 my-4">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-primary-500" />
          {location}
        </span>
        <span className="flex items-center gap-1">
          <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
          {salary}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase className="w-3.5 h-3.5 text-cyber-cyan" />
          {experience}
        </span>
      </div>

      {/* Skills Required */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {skills.slice(0, 4).map((skill, index) => (
          <SkillBadge key={index} name={skill} />
        ))}
        {skills.length > 4 && (
          <span className="text-xs text-slate-400 font-semibold self-center ml-1">
            +{skills.length - 4} more
          </span>
        )}
      </div>

      {/* Action Footers */}
      <div className="flex items-center justify-between mt-5 pt-3 border-t border-slate-150 dark:border-slate-800/50">
        <button
          onClick={onSave}
          className={`p-2 rounded-lg border cursor-pointer transition-colors duration-200 ${
            isSaved
              ? "bg-amber-500/10 border-amber-500/20 text-amber-500 hover:bg-amber-500/20"
              : "border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          }`}
          title={isSaved ? "Saved Job" : "Save Job"}
        >
          <Bookmark className="w-4 h-4 fill-current" />
        </button>

        <button
          onClick={onApply}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm cursor-pointer shadow-sm shadow-primary-500/20 hover:shadow-md transition-all"
        >
          Apply Now
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
