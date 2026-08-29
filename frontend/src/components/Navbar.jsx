import { MessageSquare } from "lucide-react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { selectedConversation } = useSelector(state => state.conversation);
  const {messages} = useSelector(state => state.message);
  return (
    <div className="h-14 flex items-center justify-between px-5 border-b border-[#262626] bg-[#0A0A0A]">

      {/* Left — chat title */}
      <div className="flex items-center gap-2.5">
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/10 border border-white/15">
          <MessageSquare size={13} className="text-white" />
        </div>
        <h2 className="text-[14px] font-semibold text-white tracking-tight">
          {selectedConversation?.title}
        </h2>
        <span className="text-[10px] font-medium text-neutral-500 bg-white/[0.04] border border-[#262626] px-2 py-0.5 rounded-full">
          {messages.length} Messages
        </span>
      </div>

      {/* Right — actions */}
     

    </div>
  );
}