(load "~/quicklisp/setup.lisp")
(ql:quickload :hunchentoot)
(defvar *acceptor* nil)

(hunchentoot:start (make-instance 'hunchentoot:easy-acceptor
                     :port 3030
                     :document-root #P"~/WORK/huyhuy17.site/public/"
                     ))

(hunchentoot:define-easy-handler (say-what-ever :uri "/hello") (name lover)
  (setf (hunchentoot:content-type*) "text/plain")
  (format nil "Hello, ~a! i am Huy, i am testing LISP ~% I build a web site ~a" name lover)  )
