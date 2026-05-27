import { motion } from 'motion/react';
import { Landmark, CreditCard, Ticket, Sparkles, ShoppingCart, Info, UserCircle2 } from 'lucide-react';
import { PathType } from '../types';

interface SceneIncitingIncidentProps {
  onSelectPath: (path: PathType) => void;
}

export default function SceneIncitingIncident({ onSelectPath }: SceneIncitingIncidentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 select-none">
      {/* Visual illustration box of Leo's Bedroom */}
      <div className="relative rounded-3xl overflow-hidden border-4 border-slate-700 bg-slate-800/90 flex flex-col md:flex-row shadow-2xl items-stretch">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/10 rounded-full filter blur-2xl pointer-events-none" />

        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 items-center p-6 md:p-8 z-10 w-full">
          
          {/* Left Column: Bedroom Interior Illustration Visual */}
          <div className="md:col-span-2 flex flex-col items-center justify-center p-6 bg-slate-950/75 rounded-2xl border border-slate-800/80 text-center space-y-4">
            {/* Cute mini scene representing Leo's room */}
            <div className="relative w-full h-40 bg-indigo-950/40 rounded-xl border border-indigo-900/40 flex items-center justify-center overflow-hidden">
              <div className="absolute bottom-0 w-full h-8 bg-amber-950/20" /> {/* floor */}
              
              {/* Retro Mattress / Bed representation */}
              <div className="absolute bottom-8 left-4 w-28 h-10 bg-indigo-800 rounded-t-lg border-t-4 border-teal-500" />
              {/* Laptop icon representing aspiration */}
              <div className="absolute top-6 right-6 p-2 bg-slate-900/90 border border-slate-700/50 rounded-lg text-xs font-mono text-slate-300 shadow-lg flex items-center space-x-1 animate-bounce-slow">
                <span>💻 Laptop ($600)</span>
              </div>

              {/* Leo Graphic (barista) */}
              <div className="absolute bottom-5 right-12 flex flex-col items-center">
                <div className="text-4xl filter drop-shadow">☕</div>
                <div className="w-10 h-14 bg-emerald-600/80 rounded-t-lg border border-emerald-500/30 flex items-end justify-center pb-2">
                  <span className="text-[10px] uppercase font-bold text-emerald-100 font-mono">Leo</span>
                </div>
              </div>

              {/* Envelope graphic of $500 */}
              <div className="absolute bottom-4 left-14 p-1 px-2.5 bg-emerald-500 border border-emerald-400 text-slate-950 text-xs font-mono font-bold rounded shadow-md flex items-center gap-1">
                <span>💸</span>
                <span>$500</span>
              </div>
            </div>

            {/* Speeches bubbles with Leo's thoughts */}
            <div className="w-full text-slate-300 text-xs text-left bg-slate-900/80 p-3 rounded-lg border border-slate-800 space-y-1.5 font-sans leading-relaxed">
              <div className="text-emerald-400 font-mono font-bold text-[10px] uppercase">LEO'S BRAIN:</div>
              <p className="italic">"Whoa. Five hundred bucks. I earned this! I really need a laptop for school and gaming... but it makes me sweat having this envelope sitting inside my desk drawer under a pile of homework."</p>
            </div>
          </div>

          {/* Right Column: Narrative Introduction Text */}
          <div className="md:col-span-3 space-y-4 text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-mono font-medium tracking-wide">
              <span>Payday Crossroads</span>
            </div>
            
            <h1 className="text-2xl font-display font-black tracking-tight text-white leading-tight">
              Meet Leo: The Freshly Minted Barista
            </h1>

            <p className="text-slate-300 text-sm leading-relaxed">
              Leo just completed his first week washing steam wands and drawing latte art. He was handed an envelope with <strong className="text-emerald-400">$500 in cool, crisp cash</strong>.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              He is highly motivated. Keeping cash lying around under a mattress feels sketchy. He wants to purchase a school laptop eventually (which retails for <strong>$600</strong>), but he is stuck at a financial crossroads.
            </p>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 text-xs text-slate-400 flex gap-2.5 leading-relaxed items-start">
              <Info className="text-indigo-400 shrink-0" size={16} />
              <span>
                <strong>Your Role:</strong> Guide Leo down one of the 5 potential paths. See how each option rewrites his financial parameters (Cash, Debt, and Credit Score) with unique learnings.
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Path Choice List Grid */}
      <div className="space-y-4 pt-4">
        <h3 className="font-mono text-xs uppercase text-slate-400 tracking-widest text-center font-bold">
          Choose Leo's Initial Pathwise Blueprint:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Path A */}
          <button
            id="btn-path-debit"
            onClick={() => onSelectPath('debit')}
            className="group text-left p-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 border-b-4 border-indigo-900 transition-all flex items-start gap-4 cursor-pointer text-white w-full shadow-lg active:scale-[0.99] translate-y-0 active:translate-y-[4px] active:border-b-0"
          >
            <div className="w-12 h-12 bg-indigo-900 rounded-xl flex items-center justify-center font-black group-hover:scale-110 transition-transform shrink-0">
              <Landmark size={24} className="text-indigo-200" />
            </div>
            <div className="space-y-0.5">
              <p className="font-display font-black text-[14px] leading-tight flex items-center gap-2">
                Path A: Standard Checking Account
                <span className="text-[9px] font-mono bg-indigo-900 text-indigo-200 px-1.5 py-0.5 rounded uppercase font-black tracking-wide">
                  Secure
                </span>
              </p>
              <p className="text-[11px] text-indigo-200/90 leading-tight">
                Deposit cash with a bank teller. Open a standard checking drawer. Bypasses credit risks entirely.
              </p>
            </div>
          </button>

          {/* Path B */}
          <button
            id="btn-path-credit"
            onClick={() => onSelectPath('credit')}
            className="group text-left p-4 rounded-2xl bg-purple-600 hover:bg-purple-500 border-b-4 border-purple-900 transition-all flex items-start gap-4 cursor-pointer text-white w-full shadow-lg active:scale-[0.99] translate-y-0 active:translate-y-[4px] active:border-b-0"
          >
            <div className="w-12 h-12 bg-purple-900 rounded-xl flex items-center justify-center font-black group-hover:scale-110 transition-transform shrink-0">
              <CreditCard size={24} className="text-purple-200" />
            </div>
            <div className="space-y-0.5">
              <p className="font-display font-black text-[14px] leading-tight flex items-center gap-2">
                Path B: Apply for a Credit Card
                <span className="text-[9px] font-mono bg-purple-900 text-purple-200 px-1.5 py-0.5 rounded uppercase font-black tracking-wide">
                  Score Builder
                </span>
              </p>
              <p className="text-[11px] text-purple-200/90 leading-tight">
                Setup secured limits using cash deposits, checking ratings, or trigger penalty interest checks!
              </p>
            </div>
          </button>

          {/* Path C */}
          <button
            id="btn-path-gambling"
            onClick={() => onSelectPath('gambling')}
            className="group text-left p-4 rounded-2xl bg-rose-600 hover:bg-rose-500 border-b-4 border-rose-900 transition-all flex items-start gap-4 cursor-pointer text-white w-full shadow-lg active:scale-[0.99] translate-y-0 active:translate-y-[4px] active:border-b-0"
          >
            <div className="w-12 h-12 bg-rose-900 rounded-xl flex items-center justify-center font-black group-hover:scale-110 transition-transform shrink-0">
              <Ticket size={24} className="text-rose-200" />
            </div>
            <div className="space-y-0.5">
              <p className="font-display font-black text-[14px] leading-tight flex items-center gap-2">
                Path C: Buy Lottery Tickets
                <span className="text-[9px] font-mono bg-rose-950 text-rose-300 px-1.5 py-0.5 rounded uppercase font-black tracking-wide">
                  Speculate
                </span>
              </p>
              <p className="text-[11px] text-rose-200/95 leading-tight">
                Skip standard indices. Chase instant multiplier card payouts at local stores. 99% loss ratios!
              </p>
            </div>
          </button>

          {/* Path D */}
          <button
            id="btn-path-investment"
            onClick={() => onSelectPath('investment')}
            className="group text-left p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 border-b-4 border-emerald-900 transition-all flex items-start gap-4 cursor-pointer text-white w-full shadow-lg active:scale-[0.99] translate-y-0 active:translate-y-[4px] active:border-b-0"
          >
            <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center font-black group-hover:scale-110 transition-transform shrink-0">
              <Sparkles size={24} className="text-emerald-200" />
            </div>
            <div className="space-y-0.5">
              <p className="font-display font-black text-[14px] leading-tight flex items-center gap-2">
                Path D: Index Fund Investments
                <span className="text-[9px] font-mono bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded uppercase font-black tracking-wide">
                  Compound
                </span>
              </p>
              <p className="text-[11px] text-emerald-100/90 leading-tight">
                Consult with smart sister Maya. Discover index holdings, passive dividend yields, versus high-stress crypto slots.
              </p>
            </div>
          </button>

          {/* Path E */}
          <button
            id="btn-path-bnpl"
            onClick={() => onSelectPath('bnpl')}
            className="group text-left p-4 rounded-2xl bg-slate-700 hover:bg-slate-600 border-b-4 border-slate-900 transition-all flex items-start gap-4 cursor-pointer text-white w-full md:col-span-2 shadow-lg active:scale-[0.99] translate-y-0 active:translate-y-[4px] active:border-b-0"
          >
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center font-black group-hover:scale-110 transition-transform shrink-0">
              <ShoppingCart size={24} className="text-slate-300" />
            </div>
            <div className="space-y-0.5">
              <p className="font-display font-black text-[14px] leading-tight flex items-center gap-2">
                Path E: Splitting Pay Later Installments
                <span className="text-[9px] font-mono bg-slate-950 text-slate-400 px-1.5 py-0.5 rounded uppercase font-black tracking-wide">
                  Micro installments
                </span>
              </p>
              <p className="text-[11px] text-slate-300 leading-tight">
                Take immediate ownership of the device via an online buy now pay later button plan. High automated payment risk!
              </p>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}
