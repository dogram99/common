import React, {useRef, useState} from 'react';
import ErrorBoundary from "../../components/ErrorBoundary";

const JoblinkApi = () => {
    // Other Hooks
    const refApiKey = useRef('');

    // States
    const [apiKey, setApiKey] = useState('M4v+Mk#bAcY+U+#<([{q&B9YA&^fqnZ_N)RTydKJxA&3M}C8p2L\'5rm4R+2MALWT^_%*P6~jGJ7D<ns^');

    // Actions
    const copyCodeToClipboard = (e) => {
        refApiKey.current.select()
        document.execCommand('copy');
        e.target.focus();
    }

    return (
        <ErrorBoundary>
            <div className="app-content pt-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="title error-title mb-3">Joblink Api</h1>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-12">
                            <div className="full-alert full-alert--warning">
                                <div className="full-alert__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 18.5C12.6903 18.5 13.25 17.9403 13.25 17.25C13.25 16.5597 12.6903 16 12 16C11.3097 16 10.75 16.5597 10.75 17.25C10.75 17.9403 11.3097 18.5 12 18.5Z"
                                            fill="#FB923C"/>
                                        <path
                                            d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V6Z"
                                            fill="#FB923C"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M4.22183 4.22182C6.21136 2.23232 8.96273 1 12 1C15.0373 1 17.7886 2.23231 19.7782 4.22182C21.7677 6.21135 23 8.96273 23 12C23 15.0373 21.7677 17.7886 19.7782 19.7782C17.7886 21.7677 15.0373 23 12 23C8.96273 23 6.21136 21.7677 4.22183 19.7782C2.23232 17.7886 1 15.0373 1 12C1 8.96273 2.23233 6.21135 4.22183 4.22182ZM12 3C9.51447 3 7.26584 4.00626 5.63603 5.63604C4.00625 7.26585 3 9.51447 3 12C3 14.4855 4.00626 16.7342 5.63604 18.3639C7.26584 19.9937 9.51447 21 12 21C14.4855 21 16.7342 19.9937 18.3639 18.3639C19.9937 16.7342 21 14.4855 21 12C21 9.51447 19.9937 7.26584 18.3639 5.63604C16.7342 4.00626 14.4855 3 12 3Z"
                                              fill="#FB923C"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="full-alert__title">WARNING!</div>
                                    <div className="full-alert__desc">
                                        <p>
                                            API key allows access to Joblink App database and all content within.
                                            Provide
                                            the
                                            key to third parties only if you have right to do that and third party has
                                            signed
                                            related contracts with Joblink. The key is same for all third parties, so
                                            changing
                                            it prevents access from all parties without an updated key.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="white-shadow-box">
                                <div className="mb-2">API key</div>
                                <div>
                                    <input type="text"
                                           ref={refApiKey}
                                           className="form-control w-100"
                                           onChange={e => setApiKey(e.target.value)}
                                           value={apiKey}/>
                                </div>
                                <div className="d-md-flex justify-content-md-between mt-4">
                                    <div className="btn-group">
                                        <button className="btn btn--green " disabled>Create new</button>
                                        <button className="btn btn--light-green"
                                                onClick={copyCodeToClipboard}>Copy key
                                        </button>
                                    </div>
                                    <button className="btn btn--danger" disabled>Deactivate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
}

export default JoblinkApi;
