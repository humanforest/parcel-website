import Script from "next/script"

export function LiveChat({ widgetOpen }: { widgetOpen: boolean }) {
  return (
    <Script id="dixa-chat">
      {`
      (function (w, d, s) {
        if (w._dixa_) return;
        w._dixa_ = {
          invoke: function (m, a) {
            w._dixa_.pendingCalls = w._dixa_.pendingCalls || [];
            w._dixa_.pendingCalls.push([m, a]);
          },
          addListener: function (event, listener) {
            w._dixa_.pendingAddListenerCalls = w._dixa_.pendingAddListenerCalls || [];
            w._dixa_.pendingAddListenerCalls.push([event, listener]);
          },
        };
        s = d.createElement('script');
        s.type = 'text/javascript';
        s.setAttribute('charset', 'utf-8');
        s.async = true;
        s.src = 'https://messenger.dixa.io/bootstrap.js';
        var before = d.getElementsByTagName('script')[0];
        before.parentNode.insertBefore(s, before);
      })(window, document);

      _dixa_.invoke('init', { messengerToken: '04b76f6f4c1142eba1943e50efc8bd77' });
      ${widgetOpen && `_dixa_.invoke("setWidgetOpen", true)`}
      `}
    </Script>
  )
}
