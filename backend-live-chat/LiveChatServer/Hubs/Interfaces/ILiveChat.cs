using System.Threading.Tasks;

namespace LiveChatServer.Hubs.Interfaces {
    public interface ILiveChat {
        Task OnExitChatAsync(string userName); 
        Task OnEnterChatAsync(string userName); 
        Task OnNewMessageAsync(string userName, string message); 
    }
}