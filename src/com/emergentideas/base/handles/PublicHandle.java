package com.emergentideas.base.handles;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.emergentideas.logging.Logger;
import com.emergentideas.logging.SystemOutLogger;
import com.emergentideas.webhandle.handlers.Handle;

public class PublicHandle {
	
	protected Logger log = SystemOutLogger.get(PublicHandle.class);
	
	@Handle({"", "/"})
	public void index(HttpServletResponse response, HttpServletRequest request) {
		try {
			request.getRequestDispatcher("/index.html").forward(request, response);
		}
		catch(Exception e) {
			log.error("Could not forward to index.", e);
		}
	}

}
